package com.tp.DailyPumpInitiative.exceptions;

public class NullWarmUpException extends Exception{

    public NullWarmUpException(String message)
    {
        super(message);
    }

    public NullWarmUpException(String message, Throwable innerException)
    {
        super(message, innerException);
    }

}
