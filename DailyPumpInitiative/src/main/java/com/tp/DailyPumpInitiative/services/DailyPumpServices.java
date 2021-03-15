package com.tp.DailyPumpInitiative.services;

import com.tp.DailyPumpInitiative.exceptions.*;
import com.tp.DailyPumpInitiative.models.*;
import com.tp.DailyPumpInitiative.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Component
public class DailyPumpServices {

    @Autowired
    WorkoutDao workoutDao;

    @Autowired
    ExerciseDao exerciseDao;

    @Autowired
    IntensityDao intensityDao;

    @Autowired
    WarmUpDao warmUpDao;

    @Autowired
    CooldownDao cooldownDao;

//    public Workout setWorkoutList(Integer intensityID)
//    {
//        return workoutDao.getIntensityByID(intensityID);
//    }

    /* INTENSITY SERVICES */

    public List<Intensity> getIntensityList() throws NullIntensityException,
            InvalidInputException
    {
        return intensityDao.getIntensityList();
    }


    /* WORKOUT SERVICES */

    public Workout getWorkoutByID(Integer workoutID) throws NullWorkoutException,
            InvalidInputException
    {
        return workoutDao.getWorkoutByID(workoutID);
    }

    public List<Workout> getWorkoutList(Integer intensityID) throws NullIntensityException,
            NullWorkoutException, InvalidInputException
    {
        return intensityDao.getWorkoutList(intensityID);
    }

    public void deleteWorkoutByID(Integer workoutID) throws NullWorkoutException,
            InvalidInputException
    {
        workoutDao.deleteWorkoutByID(workoutID);
    }

    public Workout addWorkoutToList(Workout toAdd) throws NullWorkoutException,
            InvalidInputException
    {
        return workoutDao.addWorkoutToList(toAdd);
    }

    /* EXERCISE SERVICES */

    public boolean getCompleted(Integer exerciseID) throws NullExerciseException,
            InvalidInputException
    {
        return exerciseDao.isCompleted(exerciseID);
    }

    public List<Exercise> getExerciseList(Integer workoutID) throws NullExerciseException,
            NullWorkoutException, InvalidInputException
    {
        return workoutDao.getExerciseList(workoutID);
    }

    public List<Exercise> getAllExercises() throws NullExerciseException,
            InvalidInputException
    {
        return exerciseDao.getAllExercises();
    }

    public Exercise getExerciseByID(Integer exerciseID) throws NullExerciseException,
            InvalidInputException
    {
        return exerciseDao.getExerciseByID(exerciseID);
    }

    public void deleteExerciseByID(Integer exerciseID) throws NullExerciseException,
            InvalidInputException
    {
        exerciseDao.deleteExerciseByID(exerciseID);
    }

    public Exercise addExerciseToList(Exercise toAdd) throws NullExerciseException,
            InvalidInputException
    {
        return exerciseDao.addExerciseToList(toAdd);
    }

    public Exercise addExerciseToWorkout(Exercise toAdd, Integer workoutID) throws
            NullExerciseException, NullWorkoutException, InvalidInputException
    {
        return exerciseDao.addExerciseToWorkout(toAdd, workoutID);
    }

    public void deleteExercisesFromWorkout(Integer workoutID) throws NullExerciseException,
            NullWorkoutException, InvalidInputException
    {
        exerciseDao.deleteExercisesFromWorkout(workoutID);
    }

    public Exercise editExerciseByID(Exercise toEdit, Integer exerciseID) throws NullExerciseException,
            NullWorkoutException, InvalidInputException
    {
        return exerciseDao.editExerciseByID(toEdit, exerciseID);
    }

    // WARM UPS

    public List<WarmUp> getAllWarmUps() throws NullWarmUpException, InvalidInputException
    {
        return warmUpDao.getAllWarmUps();
    }

    // COOLDOWNS

    public List<Cooldown> getAllCooldowns() throws NullCooldownException, InvalidInputException
    {
        return cooldownDao.getAllCooldowns();
    }

}
