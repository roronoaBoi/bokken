const id = 'audit_f3245d39ea7711e1aff10800200c9a66';

function toUUID(str) {
  const uuid = str.split('_')[1];

  return `${uuid.substr(0, 8)}-${uuid.substr(8, 4)}-${uuid.substr(12, 4)}-${uuid.substr(16, 4)}-${uuid.substr(20)}`
}

function toUUID2(str) {
    const uuid = str.split('_')[1]
    return `${uuid.slice(0,8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}`
}

const item1 = toUUID(id)
const item2 = toUUID2(id)

console.log(item1)
console.log(item2)