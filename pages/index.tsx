import { Button } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import confetti from 'canvas-confetti'
export default function IndexPage() {
	const clickHandler = () => {
		// do this for 30 seconds
		var duration = 30 * 1000;
		var end = Date.now() + duration;

		(function frame() {
			// launch a few confetti from the left edge
			confetti({
				particleCount: 7,
				angle: 60,
				spread: 55,
				origin: { x: 0 }
			});
			// and launch a few from the right edge
			confetti({
				particleCount: 7,
				angle: 120,
				spread: 55,
				origin: { x: 1 }
			});

			// keep going until we are out of time
			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}
		}());
	}
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="flex flex-wrap gap-4 items-center">
					<Button color="default" onClick={clickHandler}>
						Default
					</Button>
					<Button color="primary">
						Primary
					</Button>
					<Button color="secondary">
						Secondary
					</Button>
					<Button color="success">
						Success
					</Button>
					<Button color="warning">
						Warning
					</Button>
					<Button color="danger">
						Danger
					</Button>
				</div>
			</section>
		</DefaultLayout>
	);
}
