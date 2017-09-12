export function generatePoints(n) {

  if (isNaN(n)) {
    return { type: 'GENERATE_POINTS_FAILED', payload: { error: 'Input is not a number..' }};
  }

  if (n === '') {
    return { type: 'GENERATE_POINTS_FAILED', payload: { error: 'Enter a number..' }};
  }

  if (n > 20000) {
    return { type: 'GENERATE_POINTS_FAILED', payload: { error: 'Number is too big..' } };
  }

  var points = [];

  for (let i = 0; i < n; i++) {
    let randomX = Math.floor(Math.random() * 550);
    let randomY = Math.floor(Math.random() * 550);
    points.push(new Point(randomX, randomY));
  }

  return { type: 'GENERATE_POINTS', payload: { points: points, hull: [] } };
};

// Jarvis’s Algorithm or Wrapping
export function calculateConvexHull(points) {
  var n = points.length;

  if (!n || n < 3) {
    return { type: 'CALCULATE_CONVEX_HULL_FAILED', payload: { error: 'Number is not valid..' } };
  }

  var hull = [];
  var leftmost = 0;
  for (let i = 0; i < n; i++) {
    if (points[i].x < points[leftmost].x) {
      leftmost = i;
    }
  }

  var p = leftmost;
  var q;

  do {
    hull.push(points[p]);
    q = (p + 1) % n;

    for (let i = 0; i < n; i++) {
      if (orientation(points[p], points[i], points[q]) === 2) {
        q = i;
      }
    }

    p = q;
  } while (p !== leftmost)

  return { type: 'CALCULATE_CONVEX_HULL', payload: { hull: hull } };
};

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function orientation(p, q, r) {
  var val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
  if (val === 0) {
    return 0;
  }

  return (val > 0)? 1: 2;
}
