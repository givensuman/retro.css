import React from 'react'

export default (
        { children }: React.HTMLAttributes<HTMLDivElement>
    ) => {
    return (
        <div className="col p-10 pb-100" style={{
            maxWidth: '600px'
        }}>
            {children}
        </div>
    )
}