import React, { createContext, useContext, useState } from 'react';

const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
    const [scheduleBlocks, setScheduleBlocks] = useState([]);

    const addScheduleBlock = (block) => {
        setScheduleBlocks([...scheduleBlocks, block]);
    };

    return (
        <ScheduleContext.Provider value={{ scheduleBlocks, addScheduleBlock }}>
            {children}
        </ScheduleContext.Provider>
    );
};

export const useSchedule = () => {
    return useContext(ScheduleContext);
};
