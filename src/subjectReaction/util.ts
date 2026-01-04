export enum SubjectReactionType {
  Comment, Reply
}

export const SubjectReactionLabel = {
  [SubjectReactionType.Comment]: {
    Single: 'Comment',
    Plural: 'Comments',
  },
    [SubjectReactionType.Reply]: {
    Single: 'Reply',
    Plural: 'Replies',
  },
}
