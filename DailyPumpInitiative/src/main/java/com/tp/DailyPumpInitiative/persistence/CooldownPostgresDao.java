package com.tp.DailyPumpInitiative.persistence;


import com.tp.DailyPumpInitiative.models.Cooldown;
import com.tp.DailyPumpInitiative.persistence.mappers.CooldownMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Profile({"production", "daoTesting"})
public class CooldownPostgresDao implements CooldownDao {

    @Autowired
    private JdbcTemplate template;

    @Override
    public List<Cooldown> getAllCooldowns() {
        List<Cooldown> toReturn = template.query("SELECT * from \"Cooldowns\";"
            ,new CooldownMapper());

        if (toReturn.isEmpty())
            return null;

        return toReturn;
    }
}
