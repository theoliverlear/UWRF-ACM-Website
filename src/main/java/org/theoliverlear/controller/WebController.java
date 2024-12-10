package org.theoliverlear.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class WebController {
    @RequestMapping("")
    public String redirect() {
        return "forward:/angular_build/index.html";
    }
}
