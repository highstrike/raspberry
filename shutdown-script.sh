#/bin/bash

touch /var/run/shutdown_signal
echo "waiting" > /var/run/shutdown_signal
while sleep 5; do
    signal=$(cat /var/run/shutdown_signal)
    if [ "$signal" = "true" ]; then
        echo "done" > /var/run/shutdown_signal
        shutdown -h now
    fi
done
