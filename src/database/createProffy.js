module.exports = async function(db, {proffyValue, classValue, classScheduleValues}){

    // insiro um professor
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffyID = insertedProffy.lastID
    
    // Cadastrar as classes
    const InsertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffyID}"
        );
    `)
    
    const classID = InsertedClass.lastID
    // crio um array com todas as inserções do class schedule no banco
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${classID}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })
    // Executando todos os db.runs das classSchedules
    await Promise.all(insertedAllClassScheduleValues)

}