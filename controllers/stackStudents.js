const models = require("../models");

const getstudents = async (request, response) => {
  try {
    const studentList = await models.students.findAll({
      include: [{ model: models.Students }],
    });

    return response.send(studentList);
  } catch (error) {
    return response.status(500).send("Unknown error while retrieving students");
  }
};

const getstudentById = async (request, response) => {
  try {
    const id = parseInt(request.params.id);

    const student = await models.students.findOne({
      where: { id },
      include: [{ model: models.Students }],
    });

    return student ? response.send(student) : response.sendStatus(404);
  } catch (error) {
    return response.status(500).send("Unknown error while retrieving student");
  }
};

const createstudent = async (request, response) => {
  try {
    const { name, gender, location } = request.body;

    if (!name || !gender || !location) {
      return response
        .status(400)
        .send("The following attributes are required: name, gender, location");
    }

    const newstudent = await models.students.create({
      name,
      gender,
      location,
    });

    return response.status(201).send(newstudent);
  } catch (error) {
    return response
      .status(500)
      .send("Unknown error while creating new student");
  }
};

const deletestudent = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const student = await models.students.findOne({ where: { id } });

    if (!student)
      return response.status(404).send(`Unknown student with ID: ${id}`);

    if (student.protected)
      return response.status(409).send("Cannot delete protected students");

    await models.students.destroy({ where: { id } });

    return response.send(`Successfully deleted the student with ID: ${id}`);
  } catch (error) {
    return response.status(500).send("Unknown error while deleting student");
  }
};

module.exports = {
  getstudents,
  getstudentById,
  createstudent,
  deletestudent,
};
