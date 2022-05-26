interface findAllOptions {
    where: {
        habitId: string
    }
}

const fakeDailyEntry = {
	id: 1,
	habitId: 1,
	minimalCredit_RequirementWasMet: false,
	partialCredit_RequirementWasMet: false,
	fullCredit_RequirementWasMet: false,
	createdAt: new Date(2020, 4, 11, 10),

	update: () => {},
	save: () => {}
};



async function mockfindAll(options: findAllOptions){
	if(options.where.habitId === "1"){
		return [fakeDailyEntry];
	}

	return [];
}

async function mockfindOne(){
    return fakeDailyEntry;
}

async function mockfindByPk(pk: string){
    if(pk === '1'){
		return fakeDailyEntry;
    }

    return null;
}

export {mockfindOne, mockfindAll, mockfindByPk};