import React from 'react';

const Star = () => {
    return (
      <div>
        <div class="rating">
          <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
          <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
        </div>
      </div>
    );
};

export default Star;