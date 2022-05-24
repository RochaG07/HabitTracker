interface findOptions {
    where: {
        name: string
    }
}

function mockBuild(){
    return {
        id: "2",
        name: "testHabit",
        repeteableAtTheseDaysOfWeek: "Mon,Thu,Wed,Fri",
        minimalCredit_condition: "Ler uma linha de código",
        partialCredit_condition: "2 Pomodoros",
        fullCredit_condition: "6 Pomodoros",

        save: () => {},
        destroy: () => {}
    };
}

async function mockfindOne(options: findOptions){
    if(options.where.name === "testAlreadyThere"){
        return {
            id: "1",
            name: "testAlreadyThere",
            repeteableAtTheseDaysOfWeek: "Mon,Thu,Wed,Fri",
            minimalCredit_condition: "Ler uma linha de código",
            partialCredit_condition: "2 Pomodoros",
            fullCredit_condition: "6 Pomodoros",

            save: () => {},
            destroy: () => {}
        }
    }

    return null;
}

async function mockfindByPk(pk: string){
    if(pk === '1'){
        return {
            id: "1",
            name: "testAlreadyThere",
            repeteableAtTheseDaysOfWeek: "Mon,Thu,Wed,Fri",
            minimalCredit_condition: "Ler uma linha de código",
            partialCredit_condition: "2 Pomodoros",
            fullCredit_condition: "6 Pomodoros",

            save: () => {},
            destroy: () => {}
        }
    }

    return null;
}


export {mockBuild, mockfindOne, mockfindByPk};