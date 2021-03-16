package com.tp.DailyPumpInitiative.persistence;

import com.tp.DailyPumpInitiative.models.Cooldown;

import java.util.List;

public interface CooldownDao {

    List<Cooldown> getAllCooldowns();

    List<String> getAllCooldownURLS();

}
