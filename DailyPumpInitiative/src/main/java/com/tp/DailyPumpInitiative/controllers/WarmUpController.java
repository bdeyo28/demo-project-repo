package com.tp.DailyPumpInitiative.controllers;

import com.tp.DailyPumpInitiative.exceptions.*;
import com.tp.DailyPumpInitiative.models.Exercise;
import com.tp.DailyPumpInitiative.services.DailyPumpServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class WarmUpController {

    @Autowired
    DailyPumpServices service;

    @GetMapping("/allWarmUps")
    public ResponseEntity getAllWarmUps()
    {
        try {
            return ResponseEntity.ok(service.getAllWarmUps());
        } catch (NullWarmUpException | InvalidInputException ex)
        {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

}
