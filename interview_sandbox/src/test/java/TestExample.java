import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.math.BigDecimal;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

// Test to verify JUnit and Mockito configuration
@ExtendWith(MockitoExtension.class)
class TestExample {

    interface CurrencyConverter {
        BigDecimal convert(BigDecimal amount, String toCurrency);
    }

    @Mock
    private CurrencyConverter currencyConverter;

    @Test
    void shouldVerifyJunitAndMockitoAreWorking() {
        int sum = 2 + 2;
        assertEquals(4, sum, "JUnit 5 assertions should work");

        BigDecimal inputAmount = new BigDecimal("100.00");
        BigDecimal expectedMockResult = new BigDecimal("92.50");

        when(currencyConverter.convert(inputAmount, "EUR")).thenReturn(expectedMockResult);

        BigDecimal actualResult = currencyConverter.convert(inputAmount, "EUR");

        assertNotNull(actualResult, "Mocked service should return a value");
        assertEquals(expectedMockResult, actualResult, "Mockito stubbing should work correctly");
    }
}