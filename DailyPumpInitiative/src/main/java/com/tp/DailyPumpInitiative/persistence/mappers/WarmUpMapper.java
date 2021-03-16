package com.tp.DailyPumpInitiative.persistence.mappers;

import com.tp.DailyPumpInitiative.models.WarmUp;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class WarmUpMapper implements RowMapper<WarmUp> {


    @Override
    public WarmUp mapRow(ResultSet resultSet, int i) throws SQLException {
        WarmUp toReturn = new WarmUp();

        toReturn.setWarmUpID(resultSet.getInt("warmUpID"));
        toReturn.setDesc(resultSet.getString("description"));
        toReturn.setWarmUpName(resultSet.getString("warmUpName"));
        toReturn.setWarmUpURL(resultSet.getString("url"));

        return toReturn;
    }
}
