package com.tp.DailyPumpInitiative.models;

public class Exercise {

    private String exerciseName;
    private boolean bodyweight;
    private boolean isComplete;
    private String exerciseWeight;
    private String exerciseReps;
    private Integer exerciseID;
    private Integer workoutID;
    private String exerciseDesc;
    private Integer exerciseSets;
    private String exerciseURL;

    public Exercise()
    {

    }

    public Exercise (String exerciseName, String exerciseWeight, String exerciseReps, Integer workoutID
        , boolean bodyweight, boolean isComplete, Integer exerciseID, String exerciseDesc,
                     Integer exerciseSets, String exerciseURL)
    {
        this.exerciseDesc = exerciseDesc;
        this.bodyweight = bodyweight;
        this.isComplete = isComplete;
        this.exerciseName = exerciseName;
        this.exerciseWeight = exerciseWeight;
        this.exerciseReps = exerciseReps;
        this.workoutID = workoutID;
        this.exerciseID = exerciseID;
        this.exerciseSets = exerciseSets;
        this.exerciseURL = exerciseURL;
    }

    public Exercise (Exercise that)
    {
        this.isComplete = that.isComplete;
        this.bodyweight = that.bodyweight;
        this.exerciseName = that.exerciseName;
        this.exerciseWeight = that.exerciseWeight;
        this.exerciseReps = that.exerciseReps;
        this.exerciseID = that.exerciseID;
        this.exerciseDesc = that.exerciseDesc;
        this.exerciseSets = that.exerciseSets;
        this.workoutID = that.workoutID;
    }

    public String getExerciseURL() {
        return exerciseURL;
    }

    public void setExerciseURL(String exerciseURL) {
        this.exerciseURL = exerciseURL;
    }

    public String getExerciseName() {
        return exerciseName;
    }

    public void setExerciseName(String exerciseName) {
        this.exerciseName = exerciseName;
    }

    public boolean isBodyweight() {
        return bodyweight;
    }

    public void setBodyweight(boolean bodyweight) {
        this.bodyweight = bodyweight;
    }

    public boolean isComplete() {
        return isComplete;
    }

    public void setComplete(boolean complete) {
        isComplete = complete;
    }

    public String getExerciseWeight() {
        return exerciseWeight;
    }

    public void setExerciseWeight(String exerciseWeight) {
        this.exerciseWeight = exerciseWeight;
    }

    public String getExerciseReps() {
        return exerciseReps;
    }

    public void setExerciseReps(String exerciseReps) {
        this.exerciseReps = exerciseReps;
    }

    public Integer getExerciseID() {
        return exerciseID;
    }

    public void setExerciseID(Integer exerciseID) {
        this.exerciseID = exerciseID;
    }

    public Integer getWorkoutID() {
        return workoutID;
    }

    public void setWorkoutID(Integer workoutID) {
        this.workoutID = workoutID;
    }

    public String getExerciseDesc() {
        return exerciseDesc;
    }

    public void setExerciseDesc(String exerciseDesc) {
        this.exerciseDesc = exerciseDesc;
    }

    public Integer getExerciseSets() {
        return exerciseSets;
    }

    public void setExerciseSets(Integer exerciseSets) {
        this.exerciseSets = exerciseSets;
    }
}
