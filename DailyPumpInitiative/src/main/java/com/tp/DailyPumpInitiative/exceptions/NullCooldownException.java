package com.tp.DailyPumpInitiative.exceptions;

public class NullCooldownException extends Exception{

    public NullCooldownException(String message)
    {
        super(message);
    }

    public NullCooldownException(String message, Throwable innerException)
    {
        super(message, innerException);
    }

}
