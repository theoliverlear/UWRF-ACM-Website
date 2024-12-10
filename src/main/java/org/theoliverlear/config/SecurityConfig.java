package org.theoliverlear.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    //------------------------Security-Filter-Chain---------------------------
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // HttpSecurity is the builder object used to create the security
        // filter chain. We authorize all requests and disable CSRF.
        http.authorizeRequests()
                .anyRequest().permitAll()
                .and()
                .csrf()
                .disable();
        return http.build();
    }
}
