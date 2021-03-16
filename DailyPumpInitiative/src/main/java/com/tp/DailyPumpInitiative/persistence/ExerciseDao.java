package com.tp.DailyPumpInitiative.persistence;

import com.tp.DailyPumpInitiative.models.Exercise;

import java.util.List;

public interface ExerciseDao {

    Exercise getExerciseByID(Integer exerciseID);

    boolean isCompleted(Integer exerciseID);

    void deleteExerciseByID(Integer exerciseID);

    Exercise addExerciseToList(Exercise toAdd);

    List<Exercise> getAllExercises();

    Exercise addExerciseToWorkout(Exercise toAdd, Integer workoutID);

    void deleteExercisesFromWorkout(Integer workoutID);

    Exercise editExerciseByID(Exercise toEdit, Integer exerciseID);

    List<String> getAllExerciseURLS(Integer workoutID);

}
