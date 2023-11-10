const BloodDonator = require('../Model/blood');

exports.create = async (req, res) => {
    try {
      const bloodDonator = new BloodDonator({
        date: req.body.date,
        quantity: req.body.quantity,
      });
  
      await bloodDonator.save();
  
      res.status(201).json({ message: 'Blood donator created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.read = async (req, res) => {
    try {
      const bloodDonators = await BloodDonator.find();
  
      res.status(200).json(bloodDonators);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.update = async (req, res) => {
    try {
      const bloodDonator = await BloodDonator.findByIdAndUpdate(req.params.id, req.body);
  
      res.status(200).json({ message: 'Blood donator updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      await BloodDonator.findByIdAndDelete(req.params.id);
  
      res.status(200).json({ message: 'Blood donator deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };