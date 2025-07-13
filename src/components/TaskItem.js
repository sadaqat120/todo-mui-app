import React from 'react';
import {
  Checkbox,
  IconButton,
  Typography,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatDistanceToNow } from 'date-fns';

const TaskItem = ({ task, onCheck, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        mb: 1.5,
        px: 2,
        py: 1.5,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.01)',
          boxShadow: 6,
        },
      }}
    >
      {/* Left side: checkbox + content */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
        <Checkbox
          checked={task.completed}
          onChange={() => onCheck(task.id)}
          sx={{ mt: 0.5 }}
        />
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              textDecoration: task.completed ? 'line-through' : 'none',
              fontWeight: 600,
            }}
          >
            {task.title}
          </Typography>
          {task.description && (
            <Typography variant="body2" color="text.secondary">
              {task.description}
            </Typography>
          )}
          <Typography variant="caption" color="text.secondary">
            Added {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
          </Typography>
        </Box>
      </Box>

      {/* Right side: actions */}
      <Box>
        <IconButton onClick={() => onEdit(task)} size="small" color="primary">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={() => onDelete(task.id)} size="small" color="error">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default TaskItem;
