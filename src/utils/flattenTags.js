// Utility function to flatten tags, use with call or apply
function flattenTags(tags) {
  tags.forEach(tag => {
    if (!this[tag.id]) {
      this[tag.id] = tag;
    }
  });
};

export default flattenTags;
