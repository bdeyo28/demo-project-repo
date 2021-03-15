package com.tp.DailyPumpInitiative.models;

public class WarmUp {

    private String warmUpName;
    private Integer warmUpID;
    private String desc;
    private String warmUpURL;

    public WarmUp()
    {

    }

    public WarmUp(String warmUpName, String desc, String warmUpURL, Integer warmUpID)
    {
        this.warmUpID = warmUpID;
        this.warmUpName = warmUpName;
        this.warmUpURL = warmUpURL;
        this.desc = desc;
    }

    public String getWarmUpName() {
        return warmUpName;
    }

    public void setWarmUpName(String warmUpName) {
        this.warmUpName = warmUpName;
    }

    public Integer getWarmUpID() {
        return warmUpID;
    }

    public void setWarmUpID(Integer warmUpID) {
        this.warmUpID = warmUpID;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getWarmUpURL() {
        return warmUpURL;
    }

    public void setWarmUpURL(String warmUpURL) {
        this.warmUpURL = warmUpURL;
    }
}
