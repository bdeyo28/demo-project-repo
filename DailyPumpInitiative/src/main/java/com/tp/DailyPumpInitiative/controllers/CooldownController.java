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
public class CooldownController {

    @Autowired
    DailyPumpServices service;

    @GetMapping("/allCooldowns")
    public ResponseEntity getAllCooldowns()
    {
        try {
            return ResponseEntity.ok(service.getAllCooldowns());
        } catch (NullCooldownException | InvalidInputException ex)
        {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @GetMapping("/allCooldownURLS")
    public ResponseEntity getAllCooldownURLS()
    {
        try {
            return ResponseEntity.ok(service.getAllCooldownURLS());
        } catch (NullCooldownException | InvalidInputException ex)
        {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

}
