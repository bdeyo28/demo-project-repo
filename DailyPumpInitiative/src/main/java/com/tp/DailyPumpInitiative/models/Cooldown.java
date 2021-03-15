package com.tp.DailyPumpInitiative.models;

public class Cooldown {

    private String cooldownName;
    private String desc;
    private String cooldownURL;
    private Integer cooldownID;

    public Cooldown()
    {

    }

    public Cooldown (String cooldownName, String desc, String cooldownURL, Integer cooldownID)
    {
        this.cooldownID = cooldownID;
        this.cooldownName = cooldownName;
        this.desc = desc;
        this.cooldownURL = cooldownURL;
    }

    public String getCooldownName() {
        return cooldownName;
    }

    public void setCooldownName(String cooldownName) {
        this.cooldownName = cooldownName;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getCooldownURL() {
        return cooldownURL;
    }

    public void setCooldownURL(String cooldownURL) {
        this.cooldownURL = cooldownURL;
    }

    public Integer getCooldownID() {
        return cooldownID;
    }

    public void setCooldownID(Integer cooldownID) {
        this.cooldownID = cooldownID;
    }
}
