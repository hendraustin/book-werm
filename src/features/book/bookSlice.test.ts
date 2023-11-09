import reducer, { addMetadata, BookMetadata } from './bookSlice'

test('should handle metadata being added to an empty list', () => {
    const previousState: BookMetadata[] = []
    const metadata: BookMetadata = {author: "Test Author", title: "Test Title", quantity: 1}

    expect(reducer(previousState, addMetadata(metadata))).toEqual([
        { author: "Test Author", title: "Test Title", quantity: 1 }
    ])
})

test('should handle metadata being added to an existing list', () => {
    const previousState: BookMetadata[] = [{author: "Test Author A", title: "Test Title A", quantity: 1}]
    const metadata: BookMetadata = {author: "Test Author B", title: "Test Title B", quantity: 2}

    expect(reducer(previousState, addMetadata(metadata))).toEqual([
        {author: "Test Author A", title: "Test Title A", quantity: 1},
        {author: "Test Author B", title: "Test Title B", quantity: 2},
    ])
})