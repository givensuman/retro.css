import React from 'react'

export default (
        { children }: React.HTMLAttributes<HTMLDivElement>
    ) => {
    return (
        <div className="col p-10" style={{
            maxWidth: '600px'
        }}>
            {children}
        </div>
    )
}