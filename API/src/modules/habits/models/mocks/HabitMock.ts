interface findOptions {
    where: {
        name: string
    }
}

const fakeExistingHabit = {
    id: "1",
    name: "testAlreadyThere",
    repeteableAtTheseDaysOfWeek: "Mon,Thu,Wed,Fri,Sat,Sun",
    minimalCredit_condition: "Ler uma linha de código",
    partialCredit_condition: "2 Pomodoros",
    fullCredit_condition: "6 Pomodoros",
    createdAt: new Date(2020, 4, 10, 10),

    save: () => {},
    destroy: () => {}
}

const fakeNewHabit = {
    id: "2",
    name: "testHabit",
    repeteableAtTheseDaysOfWeek: "Mon,Thu,Wed,Fri,Sat,Sun",
    minimalCredit_condition: "Ler uma linha de código",
    partialCredit_condition: "2 Pomodoros",
    fullCredit_condition: "6 Pomodoros",
    createdAt: new Date(2020, 4, 10, 10),

    save: () => {},
    destroy: () => {}
}


function mockBuild(){
    return fakeNewHabit;
}

async function mockfindOne(options: findOptions){
    if(options.where.name === "testAlreadyThere"){
        return fakeExistingHabit;
    }

    return null;
}

async function mockfindAll(){
    return [];
}

async function mockfindByPk(pk: string){
    if(pk === '1'){
        return fakeExistingHabit;
    }

    return null;
}


export {mockBuild, mockfindOne, mockfindAll, mockfindByPk};