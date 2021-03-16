package com.tp.DailyPumpInitiative.persistence.mappers;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class URLMapper implements RowMapper<String> {

    String columnName;

    public URLMapper(String columnName)
    {
        this.columnName = columnName;
    }

    @Override
    public String mapRow(ResultSet resultSet, int i) throws SQLException {

        return resultSet.getString("url");

    }
}
