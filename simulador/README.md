Processo de execução:
Passo 1 - Iniciar sensor virtual:
python3 main.py --name sc01 --broker 10.0.0.107 || broker.hivemq.com
obs: sc01 é o nome do device/sensor e o ip do servidor/gateway é 192.168.0.129

Passo 2 - Enviar mensagem solicitando que o sensor comece a publicar amostras:

mosquitto_pub -t 'dev/sc01' || 'SET09603' -h '10.0.0.106' -m '{"method":"GET", "sensor":"temperatureSensor"}'

mosquitto_pub -t 'dev/sc01' -h 'broker.hivemq.com' -m '{"method":"GET", "sensor":"temperatureSensor"}'

mosquitto_pub -t 'dev/sc01' -h 'broker.hivemq.com' -m '{"method":"flow", "sensor":"temperatureSensor", "time":{"collect":10000,"publish":10000}}'

mosquitto_pub -t 'dev/sc02' -h '10.0.0.106' -m '{"method":"flow", "sensor":"humiditySensor", "time":{"collect":10000,"publish":10000}}'
OBS: Iniciando a publicação de amostras do dispositivo sc01 sensor de radiação solar.

Passo 3 - Verificar se as mensagens estão sendo enviadas
mosquitto_sub -t '#' -h broker.hivemq.com > log.json

Instalações prévias:
MQTT Client e Servidor, no ubuntu: sudo apt install mosquitto mosquitto-clients -y
Paho-mqtt, no ubuntu: pip install paho-mqtt

Fiz essas execuções com sucesso na minha máquina host (Ubuntu 20.04).