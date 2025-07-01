"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  XCircleIcon,
  ClockIcon,
  InformationCircleIcon
} from "@heroicons/react/24/outline";

interface StatusData {
  page: {
    name: string;
    url: string;
    status: string;
  };
  activeIncidents?: Array<{
    name: string;
    started: string;
    status: string;
    impact: string;
    url: string;
  }>;
  activeMaintenances?: Array<{
    name: string;
    start: string;
    status: string;
    duration: string;
    url: string;
  }>;
}

interface StatusWidgetProps {
  compact?: boolean;
}

const StatusWidget = ({ compact = false }: StatusWidgetProps) => {
  const [statusData, setStatusData] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://cranecloud.instatus.com/summary.json');
        if (!response.ok) {
          throw new Error('Failed to fetch status');
        }
        const data: StatusData = await response.json();
        setStatusData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch status');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchStatus, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'up':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'hasissues':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case 'down':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      case 'investigating':
        return <InformationCircleIcon className="h-5 w-5 text-blue-500" />;
      case 'notstartedyet':
        return <ClockIcon className="h-5 w-5 text-gray-500" />;
      default:
        return <InformationCircleIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'up':
        return 'text-green-500';
      case 'hasissues':
        return 'text-yellow-500';
      case 'down':
        return 'text-red-500';
      case 'investigating':
        return 'text-blue-500';
      case 'notstartedyet':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status.toLowerCase()) {
      case 'up':
        return 'All Systems Operational';
      case 'hasissues':
        return 'Partial System Issues';
      case 'down':
        return 'System Outage';
      case 'investigating':
        return 'Investigating Issues';
      case 'notstartedyet':
        return 'Maintenance Scheduled';
      default:
        return 'Unknown Status';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center space-x-2 text-sm text-gray-300"
      >
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-300"></div>
        <span>Loading status...</span>
      </motion.div>
    );
  }

  if (error || !statusData) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center space-x-2 text-sm text-gray-400"
      >
        <InformationCircleIcon className="h-4 w-4" />
        <span>Status unavailable</span>
      </motion.div>
    );
  }

  // Compact version for footer
  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <div className="flex items-center space-x-2">
          {getStatusIcon(statusData.page.status)}
          <span className={`text-sm font-medium ${getStatusColor(statusData.page.status)}`}>
            {getStatusText(statusData.page.status)}
          </span>
        </div>
        
        {(statusData.activeIncidents && statusData.activeIncidents.length > 0) ||
         (statusData.activeMaintenances && statusData.activeMaintenances.length > 0) ? (
          <div className="text-xs text-gray-400">
            {statusData.activeIncidents?.length || 0} incident(s), {statusData.activeMaintenances?.length || 0} maintenance(s)
          </div>
        ) : null}
        
        <a
          href={statusData.page.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-gray-300 transition-colors flex items-center space-x-1"
        >
          <span>View details</span>
          <span>→</span>
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3"
    >
      {/* Main Status */}
      <div className="flex items-center space-x-2">
        {getStatusIcon(statusData.page.status)}
        <span className={`text-sm font-medium ${getStatusColor(statusData.page.status)}`}>
          {getStatusText(statusData.page.status)}
        </span>
      </div>

      {/* Active Incidents */}
      {statusData.activeIncidents && statusData.activeIncidents.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            Active Incidents
          </h4>
          {statusData.activeIncidents.map((incident, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-red-900/20 border border-red-500/20 rounded-lg p-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h5 className="text-sm font-medium text-red-300">
                    {incident.name}
                  </h5>
                  <p className="text-xs text-gray-400 mt-1">
                    Started: {formatDate(incident.started)}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(incident.status)} bg-opacity-10`}>
                      {incident.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-300">
                      {incident.impact}
                    </span>
                  </div>
                </div>
                <a
                  href={incident.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Active Maintenances */}
      {statusData.activeMaintenances && statusData.activeMaintenances.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            Scheduled Maintenance
          </h4>
          {statusData.activeMaintenances.map((maintenance, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h5 className="text-sm font-medium text-blue-300">
                    {maintenance.name}
                  </h5>
                  <p className="text-xs text-gray-400 mt-1">
                    Start: {formatDate(maintenance.start)}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(maintenance.status)} bg-opacity-10`}>
                      {maintenance.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300">
                      {maintenance.duration} min
                    </span>
                  </div>
                </div>
                <a
                  href={maintenance.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* View Full Status Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="pt-2"
      >
        <a
          href={statusData.page.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-gray-300 transition-colors flex items-center space-x-1"
        >
          <span>View full status page</span>
          <span>→</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default StatusWidget; 