# Kafka + Node.js

- Create without docker, for now 
- Install kafka and zookeeper locally

- Start zookeeper and kafka, separately

```
zookeeper-server-start.sh ~/kafka/config/zookeeper.properties
```

```
kafka-server-start.sh ~/kafka/config/server.properties
```

- Create a topic

```
kafka-topics.sh --bootstrap-server localhost:9092 --create --topic test
```

### Node.js

*I had problems with latest version of `node-rdkafka`, I used the 2.10v to solve*

