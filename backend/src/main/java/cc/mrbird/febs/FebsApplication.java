package cc.mrbird.febs;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.TimeZone;

@SpringBootApplication
@EnableTransactionManagement
@EnableScheduling
@EnableAsync
public class FebsApplication {

    public static void main(String[] args) {
        System.out.println("++++++++++++++++++++++++++++++++++++++++++");
        System.out.println(TimeZone.getDefault());
        System.out.println("++++++++++++++++++++++++++++++++++++++++++");
        new SpringApplicationBuilder(FebsApplication.class)
                .run(args);
    }
}
