#!/bin/bash

# Exit immediately if any command fails
set -e

# Analyze log file for errors
DEFAULT_LOG_FILE="C:\Users\91812\Desktop\fullstack-workshop\01-linux\sample-log.txt"

LOG_FILE="${1:-$DEFAULT_LOG_FILE}"

if [[ ! -f "$LOG_FILE" ]]; then
    echo "Error: Log file not found -> $LOG_FILE"
    exit 1
fi

echo""


echo "======== Log Analysis Report ========"
echo "File: $LOG_FILE"
echo ""
echo "Total Lines: $(wc -l < "$LOG_FILE")"
echo ""


echo "-------------------------------------"
echo "Error count: $(grep -c 'ERROR' "$LOG_FILE")"
echo "Warning count: $(grep -c 'WARNING' "$LOG_FILE")"
echo "INFO count: $(grep -c  'INFO' "$LOG_FILE")"
echo ""


echo "--------------------------------------"
echo "=== Unique IP Addresses ==="
grep -oE '\b([0-9]{1,3}\.){3}[0-9]{1,3}\b' "$LOG_FILE" | sort -u
