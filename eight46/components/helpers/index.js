const convertSequelizedNamesToFriendly = (obj:Object) => {
  return {
    id: obj.id,
    name: obj['organization.name'],
    cause: obj['organization.causes'],
    causeId: obj['organization.causes_id'],
    organizationId: obj['organization_id'],
    photoUrl: obj['organization.photoUrl'],
    city: obj['organization.city'],
    state: obj['organization.state'],
    country: obj['organization.country'],
    websiteUrl: obj['organization.websiteUrl'],
    mission: obj['organization.mission'],
  }
};

module.exports.convertSequelizedNamesToFriendly = convertSequelizedNamesToFriendly;