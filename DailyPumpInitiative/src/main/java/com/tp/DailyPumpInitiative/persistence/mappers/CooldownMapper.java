package com.tp.DailyPumpInitiative.persistence.mappers;

import com.tp.DailyPumpInitiative.models.Cooldown;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CooldownMapper implements RowMapper<Cooldown> {


    @Override
    public Cooldown mapRow(ResultSet resultSet, int i) throws SQLException {

        Cooldown toReturn = new Cooldown();

        toReturn.setCooldownID(resultSet.getInt("cooldownID"));
        toReturn.setCooldownName(resultSet.getString("cooldownName"));
        toReturn.setDesc(resultSet.getString("description"));
        toReturn.setCooldownURL(resultSet.getString("cooldownURL"));

        return toReturn;

    }
}
