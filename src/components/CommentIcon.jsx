import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		position: 'relative',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		fontSize: '2.5em',
	},
	count: {
		position: 'absolute',
		lineHeight: 1,
		color: '#fff',
		top: '0.5em',
		fontSize: '1em',
	},
});

export default function ModeCommentIconWithNumber({ size = 16, count = 0 }) {
	const classes = useStyles();

	return (
		<div className={classes.root} style={{ fontSize: size }}>
			<ModeCommentIcon color='primary' className={classes.icon} />
			<Typography component='span' className={classes.count}>
				{count}
			</Typography>
		</div>
	);
}
