echo "======LOG ANALYSIS REPORT======"
LOGFILE=$1

echo "File=$LOGFILE"
a=$(wc -l <$LOGFILE  )
echo "total lines=$a"
echo "-------------------------------"
if [ ! -f "$LOGFILE" ]; then
 echo "file doesn't exist"
fi
echo "--------------------------------"
b=$( grep -i "error" sample-log.txt|wc -l)
echo "ERROR: $b"
c=$( grep -i "warning" sample-log.txt|wc -l)
echo "WARNING: $c"
d=$( grep -i "info" sample-log.txt|wc -l)
echo "INFO: $d"
