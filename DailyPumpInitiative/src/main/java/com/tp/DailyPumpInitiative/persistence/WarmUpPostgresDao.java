package com.tp.DailyPumpInitiative.persistence;

import com.tp.DailyPumpInitiative.models.Cooldown;
import com.tp.DailyPumpInitiative.models.WarmUp;
import com.tp.DailyPumpInitiative.persistence.mappers.CooldownMapper;
import com.tp.DailyPumpInitiative.persistence.mappers.WarmUpMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Profile({"production", "daoTesting"})
public class WarmUpPostgresDao implements WarmUpDao{

    @Autowired
    private JdbcTemplate template;

    @Override
    public List<WarmUp> getAllWarmUps() {
        List<WarmUp> toReturn = template.query("SELECT * from \"WarmUps\";"
                ,new WarmUpMapper());

        if (toReturn.isEmpty())
            return null;

        return toReturn;
    }
}
