package com.tp.DailyPumpInitiative.daos;


import com.tp.DailyPumpInitiative.models.Exercise;
import com.tp.DailyPumpInitiative.models.Intensity;
import com.tp.DailyPumpInitiative.models.Workout;
import com.tp.DailyPumpInitiative.persistence.ExerciseDao;
import com.tp.DailyPumpInitiative.persistence.WorkoutDao;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Profile("serviceTest")
public class ExerciseInMemDao implements ExerciseDao {

    private List<Exercise> exerciseList = new ArrayList<>();
    private List<Workout> workoutList = new ArrayList<>();

    private Exercise newExercise = new Exercise();
    private Workout newWorkout = new Workout();

    public void initializeVariables()
    {
        // configure workouts
        newWorkout = new Workout(1, 1, "HIIT Circuit",
                "AMRAP");
        workoutList.add(newWorkout);

        newWorkout = new Workout(2, 2, "Upper Body Push",
                "Chest & Shoulders");
        workoutList.add(newWorkout);

        newWorkout = new Workout(3, 3, "Full Lower Body",
                "Pump the legs!");
        workoutList.add(newWorkout);

        // configure exercises
        newExercise = new Exercise("Front Squats", "150", "5 - 7", 3, false
                , false, 1, "Desc1", 5, "url");
        exerciseList.add(newExercise);

        newExercise = new Exercise("Back Squats", "160", "5 - 7", 3, false
                , true, 2, "Desc2", 4, "url");
        exerciseList.add(newExercise);

        newExercise = new Exercise("Lunges", "120", "6 - 7", 3, false
                , false, 3, "Desc3", 5, "url");
        exerciseList.add(newExercise);
    }

    @Override
    public Exercise getExerciseByID(Integer exerciseID) {
        initializeVariables();
        Exercise toReturn = null;

        for (Exercise toCopy : exerciseList)
        {
            if (toCopy.getExerciseID().equals(exerciseID))
            {
                toReturn = new Exercise(toCopy);
            }
        }

        if (toReturn.getExerciseID() == null)
        {
            throw new NullPointerException();
        }

        return toReturn;
    }

    @Override
    public boolean isCompleted(Integer exerciseID) {
        initializeVariables();
        Boolean toReturn = false;

        for (int i = 0; i < exerciseList.size(); i++)
        {
            if (exerciseList.get(i).isComplete())
            {
                toReturn = true;
            }
        }
        return toReturn;
    }

    @Override
    public void deleteExerciseByID(Integer exerciseID) {
        initializeVariables();

        for (int i = 0; i < exerciseList.size(); i++)
        {
            if (exerciseList.get(i).getExerciseID() == exerciseID)
            {
                exerciseList.remove(exerciseList.get(i));
            }
        }

    }

    @Override
    public Exercise addExerciseToList(Exercise toAdd) {
        initializeVariables();
        Exercise toReturn = toAdd;

        toReturn.getExerciseURL();
        toReturn.getWorkoutID();
        toReturn.getExerciseName();
        toReturn.getExerciseSets();
        toReturn.getExerciseWeight();
        toReturn.isBodyweight();
        toReturn.isComplete();
        toReturn.getExerciseDesc();
        toReturn.getExerciseReps();
        toReturn.getWorkoutID();
        toReturn.getExerciseID();

        exerciseList.add(toReturn);

        return toReturn;
    }
    @Override
    public List<Exercise> getAllExercises() {
        initializeVariables();
        List<Exercise> toReturn = new ArrayList<>();

        for (int i = 0; i <  exerciseList.size(); i++)
        {
            toReturn.add(exerciseList.get(i));
        }

        return toReturn;
    }

    @Override
    public Exercise addExerciseToWorkout(Exercise toAdd, Integer workoutID) {
        initializeVariables();

        Exercise toReturn = toAdd;

        toReturn.getExerciseURL();
        toReturn.getWorkoutID();
        toReturn.getExerciseName();
        toReturn.getExerciseSets();
        toReturn.getExerciseWeight();
        toReturn.isBodyweight();
        toReturn.isComplete();
        toReturn.getExerciseDesc();
        toReturn.getExerciseReps();
        toReturn.getWorkoutID();
        toReturn.getExerciseID();

        for (int i = 0; i < workoutList.size(); i++)
        {
            if (workoutID == workoutList.get(i).getWorkoutID())
            {
                exerciseList.add(toReturn);
            }
        }

        return toReturn;

    }

    @Override
    public void deleteExercisesFromWorkout(Integer workoutID) {
        initializeVariables();

        List<Exercise> toDelete = new ArrayList<>();

        for (int i = 0; i < exerciseList.size(); i++)
        {
            if (workoutID == exerciseList.get(i).getWorkoutID())
            {
                toDelete.add(exerciseList.get(i));
            }
        }

        for (int i = 0; i < workoutList.size(); i++)
        {
            if (workoutID == workoutList.get(i).getWorkoutID())
            {
                workoutList.remove(toDelete);
            }
        }

    }

    @Override
    public Exercise editExerciseByID(Exercise toEdit, Integer exerciseID) {

        initializeVariables();

        for (int i = 0; i < exerciseList.size(); i++)
        {
            if (exerciseList.get(i).getExerciseID() == exerciseID)
            {
                exerciseList.get(i).setExerciseID(toEdit.getExerciseID());
                exerciseList.get(i).setExerciseDesc(toEdit.getExerciseDesc());
                exerciseList.get(i).setExerciseReps(toEdit.getExerciseReps());
                exerciseList.get(i).setExerciseURL(toEdit.getExerciseURL());
                exerciseList.get(i).setExerciseSets(toEdit.getExerciseSets());
                exerciseList.get(i).setWorkoutID(toEdit.getWorkoutID());
                exerciseList.get(i).setExerciseName(toEdit.getExerciseName());
                exerciseList.get(i).setComplete(toEdit.isComplete());
                exerciseList.get(i).setBodyweight(toEdit.isBodyweight());
            }
        }

        return toEdit;
    }

    @Override
    public List<String> getAllExerciseURLS(Integer workoutID) {
        initializeVariables();

        List<String> toReturn = new ArrayList<>();

        for (int i = 0; i < exerciseList.size(); i++)
        {
            if (exerciseList.get(i).getWorkoutID() == workoutID)
            {
                toReturn.add(exerciseList.get(i).getExerciseURL());
            }
        }

        return toReturn;
    }

}
