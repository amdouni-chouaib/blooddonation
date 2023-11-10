const Event = require('../Model/event');

exports.create = async (req, res) => {
  try {
    const { datedebut, datefin, lieu, parrainer } = req.body;

    // Validate that the datedebut does not exceed the datefin
    if (datedebut > datefin) {
      res.status(400).json({ message: 'The datedebut cannot exceed the datefin' });
      return;
    }

    const event = new Event({
      datedebut,
      datefin,
      lieu,
      parrainer,
    });

    await event.save();

    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.readAll = async (req, res) => {
  try {
    const events = await Event.find();

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.readById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    await Event.deleteMany({});

    res.status(200).json({ message: 'All events deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateById = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ message: 'Event updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};