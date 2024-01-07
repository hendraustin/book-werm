import reducer, { BookMetadata, addMetadata, removeMetadata, incrementQuantity, decrementQuantity } from './bookSlice'

test('should handle metadata being added to an empty list', () => {
    const initialState: BookMetadata[] = []
    const metadata: BookMetadata = {author: "Test Author", title: "Test Title", quantity: 1}

    expect(reducer(initialState, addMetadata(metadata))).toEqual([
        { author: "Test Author", title: "Test Title", quantity: 1 }
    ])
})

test('should handle metadata being added to an existing list', () => {
    const initialState: BookMetadata[] = [{author: "Test Author A", title: "Test Title A", quantity: 1}]
    const metadata: BookMetadata = {author: "Test Author B", title: "Test Title B", quantity: 2}

    expect(reducer(initialState, addMetadata(metadata))).toEqual([
        {author: "Test Author A", title: "Test Title A", quantity: 1},
        {author: "Test Author B", title: "Test Title B", quantity: 2},
    ])
})

test('should handle metadata being removed from an existing list', () => {
    const initialState: BookMetadata[] = [
        {author: "Test Author A", title: "Test Title A", quantity: 1},
        {author: "Test Author B", title: "Test Title B", quantity: 2},
    ]

    expect(reducer(initialState, removeMetadata("Test Title A"))).toEqual([
        {author: "Test Author B", title: "Test Title B", quantity: 2},
    ])
})

test('should do nothing if title not in existing list', () => {
    const initialState: BookMetadata[] = [
        {author: "Test Author A", title: "Test Title A", quantity: 1},
        {author: "Test Author B", title: "Test Title B", quantity: 2},
    ]

    expect(reducer(initialState, removeMetadata("Test Title"))).toEqual([
        {author: "Test Author A", title: "Test Title A", quantity: 1},
        {author: "Test Author B", title: "Test Title B", quantity: 2},    
    ])
})

test('should handle metadata quantity being incremented if title in existing list', () => {
    const initialState: BookMetadata[] = [{author: "Test Author A", title: "Test Title A", quantity: 1}]

    expect(reducer(initialState, incrementQuantity("Test Title A"))).toEqual([
        {author: "Test Author A", title: "Test Title A", quantity: 2},
    ])
})

test('should do nothing if title not in existing list', () => {
    const initialState: BookMetadata[] = [{author: "Test Author A", title: "Test Title A", quantity: 1}]

    expect(reducer(initialState, incrementQuantity("Test Title B"))).toEqual([
        {author: "Test Author A", title: "Test Title A", quantity: 1},
    ])
})

test('should handle metadata quantity being decremented if title in existing list', () => {
    const initialState: BookMetadata[] = [{author: "Test Author A", title: "Test Title A", quantity: 2}]

    expect(reducer(initialState, decrementQuantity("Test Title A"))).toEqual([
        {author: "Test Author A", title: "Test Title A", quantity: 1},
    ])
})

test('should handle metadata not decrementing if value is one in existing list', () => {
    const initialState: BookMetadata[] = [{author: "Test Author A", title: "Test Title A", quantity: 1}]

    expect(reducer(initialState, decrementQuantity("Test Title A"))).toEqual([
        {author: "Test Author A", title: "Test Title A", quantity: 1},
    ])
})

test('should do nothing if title not in existing list', () => {
    const initialState: BookMetadata[] = [{author: "Test Author A", title: "Test Title A", quantity: 1}]

    expect(reducer(initialState, decrementQuantity("Test Title B"))).toEqual([
        {author: "Test Author A", title: "Test Title A", quantity: 1},
    ])
})
