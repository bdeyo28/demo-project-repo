package com.tp.DailyPumpInitiative.persistence;

import com.tp.DailyPumpInitiative.models.Exercise;
import com.tp.DailyPumpInitiative.persistence.mappers.BooleanMapper;
import com.tp.DailyPumpInitiative.persistence.mappers.ExerciseMapper;
import com.tp.DailyPumpInitiative.persistence.mappers.IntegerMapper;
import com.tp.DailyPumpInitiative.persistence.mappers.URLMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Profile({"production", "daoTesting"})
public class ExercisePostgresDao implements ExerciseDao {

    @Autowired
    private JdbcTemplate template;

    @Override
    public Exercise getExerciseByID(Integer exerciseID)
    {
        List<Exercise> toReturn = template.query("SELECT \"workoutID\", \"exerciseID\", \"name\", \"description\", " +
                        "\"bodyweight\", \"reps\", \"completed\", \"sets\", \"weight\", \"url\" " +
                        "FROM \"Exercise\" WHERE \"exerciseID\" = " + exerciseID + ";"
                    , new ExerciseMapper() );

        if (toReturn.isEmpty())
            return null;

        return toReturn.get(0);
    }

    @Override
    public boolean isCompleted(Integer exerciseID)
    {
        List<Boolean> toReturn = template.query("SELECT \"workoutID\", \"exerciseID\", \"name\", \"description\", \"bodyweight\", \"weight\", \"reps\", \"completed\", \"sets\"\n" +
                "FROM \"Exercise\"\n" +
                "WHERE (\"exerciseID\" = '" + exerciseID + "')", new BooleanMapper());

        if (toReturn.isEmpty())
            return false;

        return toReturn.get(0);
    }

    @Override
    public void deleteExerciseByID(Integer exerciseID)
    {
        template.execute("DELETE from \"Exercise\" where \"exerciseID\" = " + exerciseID + ";");
    }

    @Override
    public Exercise addExerciseToList(Exercise toAdd)
    {
        Integer exerciseID = template.queryForObject("INSERT INTO \"Exercise\" (\"workoutID\", \"name\", " +
                        "\"description\", \"bodyweight\", \"reps\",\n" +
                        "\t\t\t\t\t\t\"completed\", \"sets\", \"weight\", \"url\")\n" +
                        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)\n" +
                        "RETURNING *;",
                new IntegerMapper("exerciseID"),
                toAdd.getWorkoutID(),
                toAdd.getExerciseName(),
                toAdd.getExerciseDesc(),
                toAdd.isBodyweight(),
                toAdd.getExerciseReps(),
                toAdd.isComplete(),
                toAdd.getExerciseSets(),
                toAdd.getExerciseWeight(),
                toAdd.getExerciseURL());

        toAdd.setExerciseID(exerciseID);

        return toAdd;
    }

    @Override
    public List<Exercise> getAllExercises() {

        List<Exercise> toReturn = template.query("SELECT * from \"Exercise\";",
                new ExerciseMapper());
        if (toReturn.isEmpty())
            return null;

        return toReturn;

    }

    @Override
    public Exercise addExerciseToWorkout(Exercise toAdd, Integer workoutID) {

        Integer exerciseID =
                template.queryForObject("INSERT INTO \"Exercise\" \n" +
                                "(\"workoutID\", \"name\", \"description\", \"bodyweight\", \"reps\", \"completed\", \"sets\", \"weight\", \"url\")\n" +
                                "VALUES \n" +
                                "("+workoutID+", ?, ?, ?, ?, ?, ?, ?, ?)\n" +
                                "RETURNING *;",
                new IntegerMapper("exerciseID"),
                toAdd.getExerciseName(),
                toAdd.getExerciseDesc(),
                toAdd.isBodyweight(),
                toAdd.getExerciseReps(),
                toAdd.isComplete(),
                toAdd.getExerciseSets(),
                toAdd.getExerciseWeight(),
                toAdd.getExerciseURL());

        toAdd.setWorkoutID(workoutID);
        toAdd.setExerciseID(exerciseID);

        return toAdd;
    }

    @Override
    public void deleteExercisesFromWorkout(Integer workoutID) {
        template.execute("DELETE from \"Exercise\" where \"workoutID\" = "+workoutID+";");
    }

    @Override
    public Exercise editExerciseByID(Exercise toEdit, Integer exerciseID) {

        Integer workoutID = template.queryForObject("UPDATE \"Exercise\"\n" +
                "SET\n" +
                "\"name\" = ?,\n" +
                "\"description\" = ?,\n" +
                "\"bodyweight\" = ?,\n" +
                "\"reps\" = ?,\n" +
                "\"completed\" = ?,\n" +
                "\"sets\" = ?,\n" +
                "\"weight\" = ?,\n" +
                "\"url\" = ?\n" +
                "WHERE \"exerciseID\" = "+exerciseID+"\n" +
                "RETURNING *;", new IntegerMapper("workoutID"),
                toEdit.getExerciseName(),
                toEdit.getExerciseDesc(),
                toEdit.isBodyweight(),
                toEdit.getExerciseReps(),
                toEdit.isComplete(),
                toEdit.getExerciseSets(),
                toEdit.getExerciseWeight(),
                toEdit.getExerciseURL());

        toEdit.setWorkoutID(workoutID);
        toEdit.setExerciseID(exerciseID);

        return toEdit;

    }

    @Override
    public List<String> getAllExerciseURLS(Integer workoutID) {

        List<String> exerciseURLS = template.query("SELECT \"url\" from " +
                "\"Exercise\" WHERE \"workoutID\" = "+workoutID+";", new URLMapper("url"));


        if (exerciseURLS.isEmpty())
            return null;

        return exerciseURLS;


    }

}
