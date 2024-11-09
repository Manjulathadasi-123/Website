#!/bin/bash

# sysopctl v0.1.0 - A system administration command
# Author: Your Name

# Function to show version information
show_version() {
  echo "sysopctl version 0.1.0"
}

# Function to display help message
show_help() {
  cat << EOF
sysopctl - A system management tool.

Usage:
  sysopctl --help
  sysopctl --version
  sysopctl service list
  sysopctl service start <service-name>
  sysopctl service stop <service-name>
  sysopctl system load
  sysopctl disk usage
  sysopctl process monitor
  sysopctl logs analyze
  sysopctl backup <path>

Options:
  --help           Show this help message.
  --version        Show version information.

Examples:
  sysopctl service list
  sysopctl system load
  sysopctl service start apache2
  sysopctl disk usage
  sysopctl backup /home/user
EOF
}

# Function for listing active services
list_services() {
  systemctl list-units --type=service --state=active
}

# Function to show system load averages
system_load() {
  uptime
}

# Function to start a service
start_service() {
  if [ -z "$1" ]; then
    echo "Error: Service name required."
    exit 1
  fi
  sudo systemctl start "$1"
  echo "Service $1 started."
}

# Function to stop a service
stop_service() {
  if [ -z "$1" ]; then
    echo "Error: Service name required."
    exit 1
  fi
  sudo systemctl stop "$1"
  echo "Service $1 stopped."
}

# Function to check disk usage
disk_usage() {
  df -h
}

# Function to monitor system processes
monitor_processes() {
  top
}

# Function to analyze system logs
analyze_logs() {
  journalctl -p err..alert --since "1 hour ago" | tail -n 50
}

# Function to backup files
backup_files() {
  if [ -z "$1" ]; then
    echo "Error: Path required."
    exit 1
  fi
  rsync -av --progress "$1" ~/backup/
  echo "Backup of $1 completed."
}

# Main entry point for the script
if [ "$1" == "--help" ]; then
  show_help
  exit 0
elif [ "$1" == "--version" ]; then
  show_version
  exit 0
elif [ "$1" == "service" ]; then
  case "$2" in
    list) list_services ;;
    start) start_service "$3" ;;
    stop) stop_service "$3" ;;
    *) echo "Error: Invalid service command" ;;
  esac
elif [ "$1" == "system" ]; then
  case "$2" in
    load) system_load ;;
    *) echo "Error: Invalid system command" ;;
  esac
elif [ "$1" == "disk" ]; then
  case "$2" in
    usage) disk_usage ;;
    *) echo "Error: Invalid disk command" ;;
  esac
elif [ "$1" == "process" ]; then
  case "$2" in
    monitor) monitor_processes ;;
    *) echo "Error: Invalid process command" ;;
  esac
elif [ "$1" == "logs" ]; then
  case "$2" in
    analyze) analyze_logs ;;
    *) echo "Error: Invalid logs command" ;;
  esac
elif [ "$1" == "backup" ]; then
  backup_files "$2"
else
  echo "Error: Unknown command. Use --help for usage information."
fi
