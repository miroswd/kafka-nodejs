console.log("producer")


const Kafka = require("node-rdkafka");
const eventType = require("../eventType");

const stream = Kafka.Producer.createWriteStream({
  "metadata.broker.list": 'localhost:9092',
}, {},
  {
    topic: "test"
  }
);


const getRandomPet = () => {
  const pets = [
    {
      category: 'CAT',
      noises: ['purr', 'meow']
    },
    {
      category: 'DOG',
      noises: ['woof', 'bark']
    }
  ];

  const pet = pets[Math.floor(Math.random() * pets.length)];
  const noise = pet.noises[Math.floor(Math.random() * pet.noises.length)];

  return { category: pet.category, noise }
}


const queueMessage = () => {

  const { category, noise } = getRandomPet();

  const event = {
    category, noise
  }


  // const event = {
  //   category: 'DOG', noise: 'bark'
  // };


  // const success = stream.write(Buffer.from("Hello World!"));
  const success = stream.write(eventType.toBuffer(event));

  if (success) {
    console.log("message wrote successfully to stream");
  } else {
    console.log("something went wrong")
  }
}

setInterval(() => {
  queueMessage();
}, 3000)