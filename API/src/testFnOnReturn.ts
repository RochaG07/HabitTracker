function testFnOnReturn (){

    const habit = returnFakeHabit();

    habit.save();


}

function returnFakeHabit() {
    return {
        name: "testHabit",
        repeteableAtTheseDaysOfWeek: "Mon,Thu,Wed,Fri",
        minimalCredit_condition: "Ler uma linha de código",
        partialCredit_condition: "2 Pomodoros",
        fullCredit_condition: "6 Pomodoros",

        save: () => {console.log('saved')}
    };
}

testFnOnReturn();