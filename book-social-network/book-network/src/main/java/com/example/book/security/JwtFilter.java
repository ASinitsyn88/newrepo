package com.example.book.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import static com.example.book.user.TokenUtil.JWT_TOKEN_BEGIN_INDEX;
import static com.example.book.user.TokenUtil.JWT_TOKEN_BEGIN_PART;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;

/**
 * Designed to process all requests except /register, /authenticate, /refresh-token, /logout
 */
@Service
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    // This filter will be triggered every time the application is called
    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain) throws ServletException, IOException {
        // do not authenticate the user who is going to register or authenticate
        if (request.getServletPath().contains("/api/v1/auth")) {
            filterChain.doFilter(request, response);
            return;
        }
        final String authHeader = request.getHeader(AUTHORIZATION);
        final String jwt;
        final String userEmail;
        if (authHeader == null || !authHeader.startsWith(JWT_TOKEN_BEGIN_PART)) {
            filterChain.doFilter(request, response);
            return;
        }
        jwt = authHeader.substring(JWT_TOKEN_BEGIN_INDEX);
        userEmail = jwtService.extractUserEmailFromToken(jwt);
        // If user is not authenticated
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            var userDetails = this.userDetailsService.loadUserByUsername(userEmail);
            if (jwtService.isTokenValid(jwt, userDetails)) {
                // Updating the SecurityContextHolder. Tell to spring that the user is authenticated
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}