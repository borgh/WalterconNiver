import { useEffect, useState } from 'react';

const useCountDown = (initialDate, monthsToAdd) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTargetDate() {
    const target = new Date(initialDate);
    target.setMonth(target.getMonth() + monthsToAdd); // Adiciona meses à data inicial
    return target;
  }

  function calculateTimeLeft() {
    const targetDate = calculateTargetDate();
    const now = new Date();

    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return [days, hours, minutes, seconds];
    }

    return [0, 0, 0, 0]; // Caso o tempo tenha passado
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [initialDate, monthsToAdd]);

  return timeLeft;
};

export default useCountDown;


/*import { useState } from "react";

const useCountDown = (date) => {

    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()
    
    const countDown = () => {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime();
        const interval = countDate - now

        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24

        const dayNumber = Math.floor(interval / day)
        const hourNumber = Math.floor(interval % day / hour)
        const minuteNumber = Math.floor(interval % hour / minute)
        const secondNumber = Math.floor(interval % minute / second)

        // console.log(dayNumber, hourNumber, minuteNumber, secondNumber)
        setDay(dayNumber);
        setHour(hourNumber);
        setMinute(minuteNumber);
        setSecond(secondNumber);
    }

    setInterval(countDown, 1000);
    return [day, hour, minute, second];
};

export default useCountDown; */
